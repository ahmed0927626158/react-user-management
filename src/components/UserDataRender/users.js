import React, { useState, useEffect } from "react";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd"

import axios from "axios";

const UsersData = () => {
    const [usersData, setUsersData] = useState([])
    const [flaskData, setFlaskData] = useState({})
    const [loading, setLoading] = useState(false)
    const [editingKey, setEdingKey] = useState("")
    const [form] = Form.useForm()
  
    const [searchText, setSearchText] = useState("")
    let [filterdData] = useState()
     useEffect(()=>
     {
        const loadUserData= async() =>
        {
         setLoading(true)
         axios.get("/user_record").then((data)=>{
            setUsersData(data.data)
        }).catch(error=>{console.log(error)})
           
            setLoading(false)
        
        }
     loadUserData()
     }, [])
   
    const handleDelete =async (value) => {
        const allUsers = [...usersData]
        console.log(value._id)
        const response=await fetch("/delete/"+value._id,{method:"POST"})
        const json =await response.json()
        console.log(response.ok);
        const filterUsers = allUsers.filter(user => user.key !== value.key)
        setUsersData(filterUsers)
    }

    const modifiedUser = usersData.map(({ body, ...users }) => ({
        ...users,
        key: users._id
    }))

    // Define Editng function 
    const edit = (record) => {
       
        form.setFieldsValue({
            fname: "",
            lname: "",
            gender: "",
            phone: "",
            ...record
        })
        setEdingKey(record.key)
    }
    // Save function during editng
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...modifiedUser]
            const index = newData.findIndex((item) => key === item.key)
            if (index > -1) {
                const item = newData[index]
                
                newData.splice(index, 1, { ...item, ...row });
                // getting the user data for update
                console.log(JSON.stringify(newData[index]))
                const response =await fetch("/updateUser",{
                    method:"POST",
                    body:JSON.stringify(newData[index]),
                    headers:{
                        "Content-Type":"application/json"
                    }
                    
                })
                console.log(response.body)
                setUsersData(newData);
                setEdingKey("");
            }
        }
        catch (error) {
            console.log("Editing", error)
        }
    }

    const cancel = () => {
        setEdingKey("")
    }

    // Make the cell edit
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        record,
        children,
        ...restProps

    }) => {
        const input = <Input />
        return (
            <td {...restProps}>
                {
                    editing ? (
                        <Form.Item name={dataIndex} style={{ margin: 0 }}
                            rules={[
                                {
                                    required: true,
                                    message: `Please input ${title}`
                                },
                            ]}>
                            {input}
                        </Form.Item>
                    ) :
                        (children
                        )}
            </td>
        )

    }
    const Columns = [
        {
            title: "First Name",
            dataIndex: "firstname",
            align: "center",
            editable: true,
        },

        {
            title: "Last Name",
            dataIndex: "lastname",
            align: "center",
            editable: true,
        },
        {
            title: "Gender",
            dataIndex: "gender",
            align: "center",
            editable: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            align: "center",
            editable: true,
        },
        {
            title: "DvLicense",
            dataIndex: "licence",
            align: "center",
            editable: true,
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",

            render: (_, record) => {
                const editable = isEditing(record)
                return modifiedUser.length >= 1 ? (
                    <Space>
                        <Popconfirm
                            title="Sure to delete"
                            onConfirm={() => handleDelete(record)}>
                            <Button type="primary" disabled={editable} danger>
                                Delete
                            </Button>

                        </Popconfirm>
                        {editable ? (
                            <span>
                                <Space size="middle">
                                    <Button
                                        onClick={(e) => save(record.key)}
                                        type="primary"
                                        style={{ marginRight: 8 }}>
                                        Save
                                    </Button>

                                    <Popconfirm title="Sure to cancel?"
                                        onConfirm={() => cancel()}>
                                        <Button>Cancel</Button>

                                    </Popconfirm>
                                </Space>
                            </span>
                        ) : (
                            <Button
                                onClick={() => edit(record)}
                                type="primary">
                                Edit
                            </Button>
                        )},
                    </Space>
                )
                    : null
            },
        }

    ];
    const isEditing = (record) => {
        return record.key === editingKey
    }
    const mergedColumn = Columns.map((col) => {
        if (!col.editable) {
            return col
        }
        return {
            ...col,
            onCell: record => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        }
    })
    const handleSeach = (e) => {
        setSearchText(e.target.value)
        if (e.target.value === "") {
            // loadData()
        }
    }
    const globalSeach = () => {
  filterdData=modifiedUser.filter((value)=>{
    return (
        value.fname.includes(searchText)
        // value.email.toLowerCase().includes(searchText.toLowerCase())||
        // value.lname.toLowerCase().includes(searchText.toLowerCase())||
        // value.license.toLowerCase().includes(searchText.toLowerCase())
    )
});
console.log(searchText.toLocaleLowerCase())
    setUsersData(filterdData)
    }
    const isMobile = window.innerWidth < 768;
    return (
        <div className="table-wrapper">
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search user"
                    onChange={handleSeach}
                    type="text"
                    allowClear
                    value={searchText}
                />
                <Button type="primary" onClick={globalSeach}>
                    Seach
                </Button>
            </Space>
            <Form form={form} component={false}>
                <Table
                    components={
                        {
                            body: { cell: EditableCell }
                        }
                    }
                    columns={mergedColumn}
                    dataSource={filterdData && filterdData.length?filterdData: modifiedUser}
                    bordered
                    pagination={false}
                    scroll={{ x: isMobile ? true : undefined }}
                />
            </Form>
        </div>
    );
}

export default UsersData