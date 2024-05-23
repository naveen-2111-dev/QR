
const Card = ({images}:any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 p-4 mt-10">
        g
        <img src={images} />
      </div>
    </div>
  )
}

export default Card