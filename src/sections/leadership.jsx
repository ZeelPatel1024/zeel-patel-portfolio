import './styles/projects.css'
import React from 'react';
import { motion } from 'framer-motion';

export const Leadership = () => {

    return (
        <div id='projects'> {/* Reusing projects ID for similar styling for now */}
            <h1>Leadership</h1>

            <motion.div
                className='allProjects'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 2 } }}
            >
                <div style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', width: '100%' }}>
                    <p>Leadership content coming soon...</p>
                </div>
            </motion.div>
        </div>
    )
}
