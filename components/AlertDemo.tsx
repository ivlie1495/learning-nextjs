'use client'

// Combines Button + Alert to demonstrate show/close (Exercise slide 11)
import { useState } from 'react'
import Button from '@/components/Button'
import Alert from '@/components/Alert'

export default function AlertDemo() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div className="space-y-4">
      <Button color="primary" onClick={() => setShowAlert(true)}>
        Show Alert
      </Button>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          This is an alert message. Click &times; to close it.
        </Alert>
      )}
    </div>
  )
}
