# Formik — Simple Example

Formik is a form library for React that handles form state, validation, and submission.

## Installation

```bash
npm install formik yup
```

## Basic Example

```tsx
'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
})

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-sm">
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border rounded px-3 py-2 w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border rounded px-3 py-2 w-full"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </form>
  )
}
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| `initialValues` | Default values for each field |
| `validationSchema` | Yup schema to validate fields |
| `onSubmit` | Called when form is valid and submitted |
| `formik.handleChange` | Wires input `onChange` to Formik state |
| `formik.handleBlur` | Tracks which fields have been touched |
| `formik.touched` | `true` for fields the user has interacted with |
| `formik.errors` | Validation error messages per field |
| `formik.isSubmitting` | `true` while `onSubmit` is running |

## vs React Hook Form

| | Formik | React Hook Form |
|-|--------|-----------------|
| Approach | Controlled inputs | Uncontrolled (refs) |
| Re-renders | On every keystroke | Minimal |
| Bundle size | ~13kb | ~9kb |
| Yup integration | Built-in | Via `@hookform/resolvers` |
