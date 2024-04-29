import React, { useEffect, useState } from 'react'
import WatchCard from './Components/WatchCard'

export default function MyPortfolio({myWatches}) {
    <div>
    {(typeof myWatches === 'undefined') ? (
      <p>Loading...</p>
    ) : (
        myWatchess.map((watch, i) => (
        <WatchCard key={i} watchImage={watch.watchImage} watchName={watch.watchName}> </WatchCard>
      ))
    )}
</div>
}