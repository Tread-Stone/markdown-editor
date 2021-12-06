import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import RemarkCode from './remark-code'
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
