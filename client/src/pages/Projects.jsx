import { useEffect, useState } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import ProjectCard from '../../components/ProjectCard.jsx';
import { list } from '../../api/projects-api.js';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchProjects = async () => {
            try {
                const data = await list(signal);
                if (data && !data.error) {
                    setProjects(data);
                } else {
                    setError(data.error || "Failed to load data.");
                }
            } catch (err) {
                setError("API Failed to Fetch.");
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

        // Cleanup on unmount
        return () => abortController.abort();
    }, []);

    if (loading) {
        return <Spinner size="xl" />;
    }

    if (error) {
        return <Text color="red.500">{error}</Text>;
    }

    return (
        <Box p={4} display="flex" flexWrap="wrap" justifyContent="space-around">
            {projects.map((project) => (
                <Box key={project._id} p={2} width="50%">
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
                        startDate={project.startDate}
                        endDate={project.endDate}
                    />
                </Box>
            ))}
        </Box>
    );
}
