import React from "react";

const HelloWorld = (props) => {
      const { title, data } = props;
      return (
        <div>{props.data} {props.title}</div>
      );
    };
    
HelloWorld.defaultProps = {
      data: 'GG geming',
      title: ''
    };

export default HelloWorld;