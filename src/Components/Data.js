import React from 'react'

const Data = () => {
    const links = [
        {
          id: "twitter",
          name: "Twitter Link",
          link: "https://twitter.com/Alh_bn_murtadho",
          subtext: "Link to user twitter Account",
        },
        {
          id: "btn__zuri",
          name: "Zuri Team",
          link: "https://training.zuri.team/",
          subtext: "Zuri Team Website"
        },
        {
          id: "books",
          name: "Zuri Books",
          link: "https://books.zuri.team/",
          subtext: "This is where you find books about design and coding",
        },
        {
          id: "book__python",
          name: "Python Books",
          link: "https://books.zuri.team/python-for-beginners?ref_id=hinzullah",
          subtext: "The best book for a python programmer",
        },
        {
          id: "pitch",
          name: "Background Check for Coders",
          link: "https://background.zuri.team/",
          subtext: "Where you pitch a service for doing background checks on coders",
        },
        {
          id: "book__design",
          name: "Design Books",
          link: "https://books.zuri.team/design-rules",
          subtext: "Where you pitch the free design book offered by Zuri",
        },
      ];
      
        
  return (
    
    <div>
        {links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  id={link.id}
                  target={"_blank"}
                  rel="noopener noreferrer">
                  <button title={link.subtext}>
                    {link.name}
                  </button>
                </a>
              ))}
    </div>
  )
}

export default Data