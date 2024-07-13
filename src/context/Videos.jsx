import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const videosApiUrl = 'http://localhost:3000/videos';
const categoriesApiUrl = 'http://localhost:3000/categories';

export const VideosContext = createContext();
VideosContext.displayName = 'Videos';

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get(videosApiUrl)
            .then(response => {
                setVideos(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Erro ao buscar vídeos:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get(categoriesApiUrl)
            .then(response => {
                setCategories(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Erro ao buscar categorias:', error);
                setLoading(false); 
            });
    }, []);

    function editCard(video) {
        video && window.scrollTo(0, 350);
        setSelectedVideo(video);
    }

    function categoryModal(boolean) {
        setIsCategoryModalOpen(boolean);
    }

    function addVideo(video) {
        axios.post(videosApiUrl, {
            "title": video.title,
            "cover": video.cover,
            "link": video.link,
            "area": video.area,
            "description": video.description
        })
        .then(response => {
            setVideos([...videos, response.data]);
            alert("Vídeo adicionado com sucesso!");
        })
        .catch(() => {
            alert("Houve um erro ao adicionar o vídeo, tente novamente!");
        });
    }

    function updateVideo(video) {
        axios.put(`${videosApiUrl}/${video.id}`, {
            "title": video.title,
            "cover": video.cover,
            "link": video.link,
            "area": video.area,
            "description": video.description
        })
        .then(() => {
            setVideos(videos.map(thisVideo => thisVideo.id === video.id ? video : thisVideo));
            alert("Vídeo editado com sucesso!");
        })
        .catch(() => {
            alert("Houve um erro ao editar o vídeo, tente novamente!");
        });
    }

    function deleteVideo(video) {
        axios.delete(`${videosApiUrl}/${video.id}`)
            .then(() => {
                setVideos(videos.filter(thisVideo => thisVideo.id !== video.id));
            })
            .catch(() => {
                alert("Houve um problema ao deletar o vídeo, tente novamente!");
            });
    }

    function addCategory(category) {
        axios.post(categoriesApiUrl, {
            "area": category.area,
            "color": category.color,
        })
        .then(response => {
            setCategories([...categories, response.data]);
            alert("Área adicionada com sucesso!");
        })
        .catch(() => {
            alert("Houve um erro ao adicionar a Área, tente novamente!");
        });
    }

    return (
        <VideosContext.Provider value={{
            videos,
            categories,
            selectedVideo,
            setSelectedVideo,
            isCategoryModalOpen,
            setIsCategoryModalOpen,
            editCard,
            categoryModal,
            addVideo,
            updateVideo,
            deleteVideo,
            addCategory
        }}>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                children
            )}
        </VideosContext.Provider>
    );
}

export function useVideosContext() {
    const context = useContext(VideosContext);
    if (!context) {
        throw new Error('useVideosContext deve ser usado dentro de um VideosProvider');
    }
    return context;
}
