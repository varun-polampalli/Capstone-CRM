import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BuynowProduct() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        pname: "",
        price: "",
        rating: "",
    });

    const { pname, price, rating } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/${id}`, user);
        navigate("/payments");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Buy Product</h2>
                    {/* <img src="./images/mobile2.png"/> */}

                    <form onSubmit={(e) => onSubmit(e)}>
                 
                        <div className="mb-3">
                            <label htmlFor="Product Name" className="form-label">
                                Product Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="pname"
                                value={pname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Rating" className="form-label">
                                Rating
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter Rating"
                                name="rating"
                                value={rating}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                price
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter price"
                                name="price"
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Checkout
                        </button>&nbsp;
                        <Link className="btn btn-outline-primary" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
