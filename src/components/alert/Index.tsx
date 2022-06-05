import './style.scss'

interface interfaceAlert {
  close: (value: boolean) => void; 
  message: string
}

function Alert({ message, close }: interfaceAlert) {


  return (

    <div className='alert'>
      <button onClick={() => close(false)}> &#215; </button>

      <h2>
        <span> &#60;</span>
        { message }
        <span>&#47;&#62; </span>
      </h2>
    </div>

  )

}

export default Alert;