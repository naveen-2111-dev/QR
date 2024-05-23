import { UseQRcontext } from "../context/QRcontext"
import Share from "../utils/Share"
import Options from "./Options"
import QRCode from "qrcode.react"

const QrCode = () => {
  const { formData } = UseQRcontext();

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="p-3 border rounded shadow-md">
          <div className="p-3 border"><QRCode value={formData.Uri} size={ 256 } /></div>
          <div className="flex justify-between items-center mt-2">
            <h1 className="uppercase font-bold font-mono text-lg">
              {formData.Purpose || "no-name"}
            </h1>
            <Share />
          </div>
        </div>
      </div>
      <div><Options/></div>
    </>
  )
}

export default QrCode