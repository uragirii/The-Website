import React from 'react'

const styles = {
    text:{}
}


export default function Para({text}) {
    return (
        <div style={styles.text}>
            {text}
        </div>
    )
}
