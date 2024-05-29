import CardItem from './components/card';

export default function index () {
  return (
    <>
    <div className='p-3 pb-md-4 mx-auto text-center'>
      <h1>
        HypSkyAPI
      </h1>
      <sub>
        <p>
          An applcation that manipulates the date from the Hypixel Skyblock API
        </p>
      </sub>
    </div>
    <div className='d-flex flex-wrap justify-content-center my-2'> 
      <CardItem title='Bits' text='A function to calculator how much 1 bit is worth in coins per item' url='/bits'/>
      <CardItem title='Recipe flips' text='An overview to see how much profit you can make per available item recipe' url='/recipe'/>
      <CardItem title='Minions' text='An overview to see how much coins a minion generates per selected period' url='/minion'/>
    </div>
    <div className='d-flex flex-wrap justify-content-center my-2 w-full'> 
      <CardItem title='Auction flips' text='An overview to see the best auction house flips available for AH or BIN' url='/auction'/>
      <CardItem title='Bazaar flips' text='An overview to see the best profit margin over the available items on the bazaar' url='/bazaar'/>
    </div>
  </>
  )
}