import React from "react";
import "../App.css";
const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  let keyVal = 1;
  return (
    <div className="container" >
      <div className="card py-3 px-2 text-center blocks" style={{minHeight:'70vh'}}>
        <a
          className="btn round"
          data-toggle="collapse"
          href={`#id${props.ids}`}
          role="button"
          aria-expanded="true"
          aria-controls="collapseExample"
        >
          <img src={image} className="img-fluid w-80 mx-auto rounded-circle" />
          <div className="card-body">
            <h2>{name}</h2>
          </div>
        </a>
        <div className="collapse" id={`id${props.ids}`}>
        <ul className="list-group list-group-flush">
            {ingredientLines.map((ingredient) => {
              return (
                <li key={keyVal++} className="list-group-item">
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
