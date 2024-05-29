import { Link } from "react-router-dom";

interface Props {
    title: string;
    text: string;
    url: string;
}

export default function card (props: Props) {
  return (    
    <div className="col-sm-6 w-25 mx-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <hr className="border-blue" />
                <p className="card-text">{ props.text } </p>
                <Link to={props.url} className="btn btn-primary">View</Link>
            </div>
        </div>
    </div>
  )
}