import React from 'react'
import { defaultSchema } from 'hast-util-sanitize'
import './fuzz.css'
import 'github-markdown-css/github-markdown.css'


interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Fuzz: React.FC<Props> = () => {

  return <div className='fuzzmenu'>{}</div>
}

export default Fuzz 
