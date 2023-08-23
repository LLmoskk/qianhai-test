import "./form.css";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import React from "react";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

function FormCompoent() {
  const onFinish = (value: object) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={["user"]}>
        <MyFormItem name="firstName" label="收货人姓名">
          <Input placeholder="收货人姓名" />
        </MyFormItem>
        <MyFormItem name="lastName" label="收货人号码">
          <Input placeholder="请输入您的手机号码" />
        </MyFormItem>

        <MyFormItem name="phone" label="手机验证码">
          <Input placeholder="手机验证码" />
        </MyFormItem>

        <MyFormItem name="address" label="详细地址">
          <Input placeholder="例如xx街道xx号" />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" size="large" danger htmlType="submit">
        提交订单
      </Button>
    </Form>
  );
}

export default FormCompoent;
