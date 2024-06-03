import Bz from '../services/api/bz_api'

export default function bazaar() {

  const test = JSON.stringify(Bz());
  return (
    <>
    <div className='p-3 pb-md-4 mx-auto text-center'>
      <h1>
        Bazaar
      </h1>
    </div>
    {test}
    </>
  )
}
