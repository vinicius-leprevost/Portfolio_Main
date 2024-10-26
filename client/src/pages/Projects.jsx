import { useState, useEffect } from 'react';
import {Box, Spinner, Text} from '@chakra-ui/react'
import ProjectCard from '../../components/ProjectCard.jsx'

export default function Projects() {
    // State to hold project data
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch project data from the backend (replace 'api/projects' with your actual API endpoint)
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects'); // Update this to your actual backend API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch project data');
                }
                const data = await response.json(); // Assume the data comes as an array of project objects
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []); // Empty dependency array means this will run once after the component mounts

    // Render loading state
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Spinner size="xl" />
            </Box>
        );
    }

    // Render error state
    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Text color="red.500">Error: {error}</Text>
            </Box>
        );
    }

    // Render projects dynamically after fetching data
    return (
        <Box p={4} display="flex" flexWrap="wrap" justifyContent="space-around">
            {projects.map((project) => (
                <Box key={project.id} p={2} width="50%">
                    <ProjectCard
                        title={project.title}
                        technologies={project.technologies}
                        short_description={project.short_description}
                        long_description={project.long_description}
                        mainImageSrc={project.mainImageSrc}
                        extraImageSrc1={project.extraImageSrc1}
                        extraImageSrc2={project.extraImageSrc2}
                        extraImageSrc3={project.extraImageSrc3}
                        extraImageSrc4={project.extraImageSrc4}
                        date={project.date}
                    />
                </Box>
            ))}
        </Box>
    );
}