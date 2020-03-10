import React, { useState, useEffect } from "react";
import { List } from "antd";
import { getNewsList } from "../../utils/fetch";
import "./styles/newsStyle.scss";

const News = () => {
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getNewsList()
      .then(data => {
        const dataSource = data.articles.map(item => {
          return {
            key: item.url,
            id: item.url,
            url: item.url,
            title: item.title,
            author: item.author,
            description: item.description,
            publishedAt: item.publishedAt,
            image: item.urlToImage
          };
        });
        setListData(dataSource);
      })
      .catch(error => {
        setError(true);
      });
  };

  const renderListView = () => {
    return (
      <div>
        <List
          dataSource={listData}
          renderItem={item => (
            <List.Item className="news__item">
              <img alt={item.title} src={item.image} className="news__image" />
              <List.Item.Meta
              className="news__Content"
                title={<a href={item.url}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  };

  return renderListView();
};

export default News;
