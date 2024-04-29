import React, { useEffect, useState } from 'react'
import WatchCard from './Components/WatchCard'

export default function WatchList() {
  const [chronoWatches, setChronoWatches] = useState([{}])
  const [ebayWatches, setEbayWatches] = useState([{}])

  useEffect(() => {
    Promise.all([
        fetch("https://jsonkeeper.com/b/VUJ0"),
        fetch("https://api.ebay.com/commerce/catalog/v1_beta/product/266745046121"),
    ]).then(links => {
        const response1 = links[0];
        const response2 = links[1];

        setChronoWatches(response1)
        setEbayWatches(response2)
    }
    )
  }, [])
  return (
    <div>
        {(typeof chronoWatches.watches === 'undefined') ? (
          <p>Loading...</p>
        ) : (
            chronoWatches.watches.map((watch, i) => (
            // <p key={i}>{watch}</p>
            <WatchCard key={i} watchImage={watch.watchImage} watchName={watch.watchName}> </WatchCard>
          ))
        )}

        {(typeof ebayWatches.watches === 'undefined') ? (
          <p>Loading...</p>
        ) : (
            ebayWatches.watches.map((watch, i) => (
            // <p key={i}>{watch}</p>
            <WatchCard key={i} watchImage={watch.watchImage} watchName={watch.watchName}> </WatchCard>
          ))
        )}
    </div>
  )
}