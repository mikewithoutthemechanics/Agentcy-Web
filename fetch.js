import https from 'https';

https.get('https://agentcywebprev.framer.website/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const videoMatches = data.match(/<video[^>]*>/g);
    const canvasMatches = data.match(/<canvas[^>]*>/g);
    const imgMatches = data.match(/<img[^>]*src="[^"]*"[^>]*>/g);
    console.log('Videos:', videoMatches);
    console.log('Canvas:', canvasMatches);
    if (imgMatches) {
      console.log('Images:', imgMatches.filter(img => img.includes('background') || img.includes('gradient') || img.includes('noise') || img.includes('mesh')).join('\n'));
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
