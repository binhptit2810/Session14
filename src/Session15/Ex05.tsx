import React, { Component } from "react";

interface Student {
    id: number;
    code: string;
    name: string;
    dob: string;
    email: string;
    status: "active" | "inactive";
}

interface State {
    students: Student[];
}

export default class QuanLySinhVien extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            students: [
                { id: 1, code: "SV001", name: "Nguyen Van A", dob: "21/12/2023", email: "nva@gmail.com", status: "active" },
                { id: 2, code: "SV002", name: "Nguyen Thi B", dob: "21/11/2022", email: "ntb@gmail.com", status: "inactive" }
            ]
        };
    }

    render() {
        return (
            <div style={{ width: 700, height: 300 }}>
                <h2 >Quản lý sinh viên</h2>
                <div style={{ display: "flex", justifyContent: "right" }}>

                    <select >
                        <option>Sắp xếp theo tuổi</option>
                        <option >Sắp xếp theo tên</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Tìm kiếm từ khóa theo tên hoặc email"
                    />
                    <button style={{ backgroundColor: "#3b82f6", color: "white" }}>Thêm mới sinh viên</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((s, i) => (
                            <tr key={s.id}>
                                <td>{i + 1}</td>
                                <td>{s.code}</td>
                                <td>{s.name}</td>
                                <td>{s.dob}</td>
                                <td>{s.email}</td>
                                <td>
                                    {s.status === "active" ? (
                                        <button style={{ backgroundColor: "#dcfce7", borderRadius: 2 }} >Đang hoạt động</button>
                                    ) : (
                                        <button style={{ backgroundColor: "#fee2e2", borderRadius: 2 }}>Ngừng hoạt động</button>
                                    )}
                                </td>
                                <td>
                                    <button style={{ backgroundColor: "#c11ea0ff", borderRadius: 2 }} >Chặn</button>
                                    <button style={{ backgroundColor: "#d3d01bff", borderRadius: 2 }}>Sửa</button>
                                    <button style={{ backgroundColor: "#c12811ff", borderRadius: 2 }}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div >
                    <button>&lt;</button>
                    <button >1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>&gt;</button>
                </div>

            </div >
        );
    }
}
