import styles from "../css/decorator.module.css";
import { List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export type DecoratorItem = {
  title: string;
  link: string;
};

export default function Decorator(): JSX.Element {
  const route = useRouteMatch();
  const history = useHistory();
  const [decoratorProps] = useState<DecoratorItem[]>([
    { title: "Music", link: "/music" },
    { title: "Bio", link: "/bio" },
    { title: "Events", link: "/events" },
  ]);
  return (
    <div className={styles.decorator}>
      <List style={{ display: "flex", flexDirection: "row" }}>
        <ListItem
          className={styles.decoratorItem}
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={"https://picsum.photos/30/30"} width={30} height={30} />
        </ListItem>
        {decoratorProps.map((link, index) => {
          return (
            <ListItem
              style={
                route.url.endsWith(link.link)
                  ? { backgroundColor: "#8AE9C1", borderRadius: 10 }
                  : {}
              }
              key={index}
              className={styles.decoratorItem}
              onClick={() => {
                history.push(link.link);
              }}
            >
              {link.title}
            </ListItem>
          );
        })}
        <ListItem style={{ flex: 1 }} />
      </List>
    </div>
  );
}
