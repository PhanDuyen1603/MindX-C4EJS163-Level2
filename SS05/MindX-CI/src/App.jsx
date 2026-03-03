import { taskStatus, tasks, users } from "./data";
import { useState } from "react";
import KanbanColumn from "./components/KanbanColumn";
import searchIcon from "./assets/icons/search.svg";
import flagIcon from "./assets/icons/Icon__Flag.svg";
import { Form, Input, DatePicker, Select, Button, Modal, Row, Col } from "antd";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [form] = Form.useForm();

  const showModal = () => {
    form.setFieldsValue({ assign: 1, status: 1 });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const newTaskId = Math.max(...taskList.map((t) => t.taskId), 0) + 1;
        const newTask = {
          taskId: newTaskId,
          title: values.title,
          description: values.description || "",
          statusId: values.status ?? 1,
          flagId: values.flagId ?? 1,
          assignedTo: values.assign ?? 1,
          deadline: values.endDate ? values.endDate.format("YYYY-MM-DD") : null,
          attachments: 0,
        };
        setTaskList([...taskList, newTask]);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch(() => {});
  };

  const assignOptions = users.map((u) => ({
    value: u.userId,
    label: u.name,
  }));

  const statusOptions = taskStatus.map((s) => ({
    value: s.statusId,
    label: s.name,
  }));

  return (
    <div className="app">
      <header className="header">
        <div className="search-box">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search Items" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <button className="btn-new" onClick={showModal}>New Item</button>
      </header>

      <main className="kanban-board">
        {taskStatus.map((status) => {
          const columnTasks = taskList.filter((task) => {
            const matchesStatus = task.statusId === status.statusId;
            if (searchText.trim() === "") return matchesStatus;
            const search = searchText.toLowerCase();
            const matchTitle = task.title.toLowerCase().includes(search);
            const matcheDesc = task.description && task.description.toLowerCase().includes(search);
            return matchesStatus && (matchTitle || matcheDesc);
          });
          return <KanbanColumn key={status.statusId} status={status} tasks={columnTasks} />;
        })}
      </main>

      <Modal
        title={
          <span className="modal-title-with-flag">
            <img src={flagIcon} alt="" className="modal-flag-icon" />
            Save task
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        transitionName={import.meta.env.MODE === "test" ? "" : undefined}
        maskTransitionName={import.meta.env.MODE === "test" ? "" : undefined}
        footer={[
          <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
          <Button key="save" type="primary" onClick={handleSave}>Save</Button>,
        ]}
        destroyOnHidden
      >
        <Form form={form} layout="vertical" initialValues={{ assign: 1, status: 1 }}>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="title"
                label="Title *"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Input placeholder="Type title of task" />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea placeholder="Type description..." rows={3} />
              </Form.Item>
              <Form.Item name="status" label="Status">
                <Select placeholder="Choose status" options={statusOptions} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="endDate" label="End Date">
                <DatePicker format="DD / MM / YYYY" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item name="assign" label="Assign">
                <Select placeholder="Choose assignee" options={assignOptions} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
