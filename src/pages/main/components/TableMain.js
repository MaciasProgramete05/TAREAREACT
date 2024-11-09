import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import '../../../styles/TableMain.css';


const TableMain = () => {
    const [data, setData] = useState([]); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
                setData(response.data); // Actualiza el estado con los datos obtenidos
            } catch (err) {
                setError(err.message); // Maneja cualquier error
            } finally {
                setLoading(false); // Cambia el estado de carga a false
            }
        };

        fetchData(); // Llama a la función para obtener datos
    }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

    if (loading) return <p>Loading...</p>; // Muestra un mensaje de carga mientras se obtienen los datos
    if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error si ocurre uno

    return (
        <div>
            <Header />
            <Sidebar />
            <Content />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="2">No data available.</td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default TableMain;