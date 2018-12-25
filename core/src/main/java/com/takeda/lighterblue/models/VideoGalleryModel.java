package com.takeda.lighterblue.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The Class VideoGalleryModel.
 *
 * @author pjagadish
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VideoGalleryModel {

	/** The Constant log. */
	private static final Logger log = LoggerFactory.getLogger(VideoGalleryModel.class);
	
	

}