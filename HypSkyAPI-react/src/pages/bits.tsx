import ah from '../services/api/api'

export default function bits() {

  const getAh = JSON.stringify(ah());

  return (
    <>
      <div className='p-3 pb-md-4 mx-auto text-center'>
        <h1>
          WIP
        </h1>
      </div>
      {getAh}
    </>
    
  )
}
