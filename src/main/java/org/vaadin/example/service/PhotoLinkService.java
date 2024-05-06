package org.vaadin.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.vaadin.example.repository.PhotoLinkRepository;

@Component
public class PhotoLinkService {

    private PhotoLinkRepository photoLinkRepository;

    public PhotoLinkService(@Autowired PhotoLinkRepository photoLinkRepository) {
        this.photoLinkRepository = photoLinkRepository;
    }

    public void deleteRecipePhotoLink(Long recipeId) {
        photoLinkRepository.removeAllByRecipeId(recipeId);
    }
}
