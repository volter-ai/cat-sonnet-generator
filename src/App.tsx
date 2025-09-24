import './App.css'

function App() {
  const catPoem = [
    'Upon the fence at midnight there she prowls,',
    'A graceful shadow with her gleaming eyes.',
    'Through darkened streets and alleyways she howls,',
    'While hunting mice beneath the starlit skies.',
    '',
    'Her velvet paws so silent as she creeps,',
    'Through garden paths and over window sills.',
    'A sovereign queen while all the household sleeps,',
    'She rules her realm oer valleys and oer hills.',
    '',
    'At dawn she stretches, yawning with delight,',
    'Then curls up in a patch of morning sun.',
    'No thoughts remain of adventures in the night,',
    'For cats know when their work is truly done.',
  ]

  return (
    <div className="poem-container">
      <h1>A Cat's Tale</h1>
      <div className="poem">
        {catPoem.map((line, index) => (
          <p key={index} className={line === '' ? 'stanza-break' : ''}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App