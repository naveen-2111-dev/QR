import Options from "./Options"

const QrCode = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-40">
        <div className="p-3 border rounded shadow-md">
          <h1 className="p-3 border">code</h1>
          <div className="flex justify-between items-center"> 
            <h1 className="flex justify-center uppercase font-bolder font-mono mt-2">name</h1>
            <h1>s</h1>
          </div>
        </div>
      </div>
      <div><Options/></div>
    </>
  )
}

export default QrCode