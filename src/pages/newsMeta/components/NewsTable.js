import React from "react";
import { Table, Tag } from "antd";
import { useMappedState } from "redux-react-hook";

const columns = [
  {
    title: "HeadLine",
    dataIndex: "headLine",
    key: "headLine",
    width: '370px'
    // render: text => <a>{text}</a>,
  },
  {
    title: "KeyWords",
    dataIndex: "keyWords",
    key: "keyWords",
    width: '350px',
    render: keyWords => (
      <span>
        {keyWords.map(keyWord => {
          let color = keyWord.length > 8 ? "geekblue" : "green";
          return (
            <Tag color={color} key={keyWord}>
              {keyWord.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "PublishTime",
    dataIndex: "publishTime",
    key: "publishTime",
    width: '170px'
  },
  {
    title: "Topics",
    key: "topics",
    dataIndex: "topics",
    render: topics => (
      <span>
        {topics.map(topic => {
          let color = topic.length > 8 ? "geekblue" : "green";
          return (
            <Tag color={color} key={topic}>
              {topic.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const NewsTable = () => {
  const data = useMappedState(state => state.data);
  const dataUsed = data.map(item => {
    return {
      key: item.contendid,
      headLine: item.contentheadline,
      keyWords: item.contentkeywords,
      publishTime: item.contentfirstpublished,
      topics: item.contenttopics
    };
  });

  return (
    <div>
      <Table columns={columns} dataSource={dataUsed} />
    </div>
  );
};

export default NewsTable;
