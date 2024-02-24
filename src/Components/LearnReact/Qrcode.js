import React, { useState } from 'react'
import qr from './images/download (1).png';
import gen from './images/Rectangle 2735.png'

const Qrcode = () => {

    const [defaultimg,setDefaultImg] = useState("")
    const [loading,setLoading] =  useState(false);
    const [qrdata,setQrData] = useState("")
    const [qrsize,setQrSize] = useState("")

    const GenerateQR = () =>{
    //  setDefaultImg(gen)
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}*${qrsize}&data=${encodeURIComponent(qrdata)}`;
        setDefaultImg(url);
    }catch(error){
        console.log("Error",error)
    }finally{
        setLoading(false)
    }
    }

    const DownloadQR = () =>{
        fetch(defaultimg)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link. href = URL.createObjectURL(blob);
            link.download = "asmnqr.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    });
    }
    return (
        <div className="qr-container">
            <h1>QR CODE GENERATER</h1>
            {defaultimg && <img src={defaultimg} className='image-size' alt=''></img>}
            {loading && <p>
                is Loading ...
            </p>}
            <div>
                <label htmlFor='dataInput ' className='input-label' >
                    Data for qr code:
                </label>
                <input type='text' className='size-Input' placeholder='Enter data for QR code' value={qrdata} onChange={(e)=>setQrData(e.target.value)}></input>
                <label htmlFor='dataInput ' className='input-label'>
                    Image Size (e.g..150):
                </label>
                <input type='text' className='size-Input' placeholder='Enter Image Size' value={qrsize} onChange={(e)=>setQrSize(e.target.value)}></input>
                <button className='Generate' onClick={GenerateQR}>Generate QR Code</button>
                <button className='Download' onClick={DownloadQR} >Download QR Code</button>
            </div>
            <p className='footer'>Designed by <a href='https://account.kpostindia.com/login'>Sritharan</a></p>
            
        </div>
    )
}

export default Qrcode
