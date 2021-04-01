import React from 'react'
import './Directory.styles.scss'
import MenuItem from "../menu-item/Menu-item.component"
import {connect} from "react-redux"
import {selectDirectorySection} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'
const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);