import data from "../location.json"



function Appart(props) {
  data = props.data;
  const listAppart = data.map((number) =>
    <listItem key={data.id()}
              value={data} />
  );
  return (
    <ul>{listAppart}</ul>
  );
}

