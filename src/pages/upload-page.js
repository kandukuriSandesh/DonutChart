import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import DataTable from '../components/data-table';
import Papa from "papaparse";

const UploadFile = () => {

    const [csvFile,setCsvFile] = React.useState();

    const [parsedData, setParsedData] = React.useState([]);

    const [col,setCols] = React.useState([]);
    const [valuesArray,setValuesArray] = React.useState([]);

    useEffect(() => {
     if(csvFile) submitFile()
    },[csvFile])

    /* const processCSV = (str, delim=",") => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const cols = headers.map((colname,index) => ({
            id:index,
           name:colname
        }))

        setCols(cols)
        console.log(headers)

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        setCsvArray(newArray)
    } */

    const submitFile = () => {
        const file = csvFile;
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
              const rowsArray = [];
              const valuesArray = [];
      
              // Iterating data to get column name and their values
              results.data.map((d) => {
                rowsArray.push(Object.keys(d));
                valuesArray.push(Object.values(d));
              });
      
              // Parsed Data Response in array format
              setParsedData(results.data);
      
              // Filtered Column Names
              setCols(rowsArray[0]);
      
              // Filtered Values
              setValuesArray(valuesArray);
            }
          });
    }

    console.log(parsedData)

    return(
        <>
        <div className='container' >
        <div className='row' >
            <div className="col-12 text-center ">
                <Link style={{textDecoration: 'none'}} to = '/' ><h2>Login Page</h2></Link> 
            </div>

        </div>
        </div>
        <div className='outerComponent' >
            <div className="innerComponent">
            <input 
            type='file'
            accept='.csv'
            id='csvFile'
            onChange={(e) => {
                setCsvFile(e.target.files[0])
            }}
            /> 
            </div>
           
        </div>
        <DataTable rows={parsedData} columns={col} />
        </>
    )
}

export default UploadFile;