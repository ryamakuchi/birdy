import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export interface AnchorProps {
  href: string
  children: React.ReactNode
}

export const Anchor: React.FC<AnchorProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-500 hover:text-blue-600 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children} <Icon icon={faExternalLinkAlt} />
  </a>
)
