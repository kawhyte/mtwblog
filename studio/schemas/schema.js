// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import blockContentVerdict from "./blockContentVerdict";
import category from "./category";
import post from "./post";
import story from "./story";
import author from "./author";
import comment from "./comment";
import verdict from "./verdict";
import blurb from "./blurb";
import hotelRating from "./hotelRating";
import foodRating from "./foodRating";
import techRating from "./roomTechRatings";
import amenities from "./amenities";
import gallery from "./gallery";
import mainImageGallery  from "./mainImageGallery"
import youtube from "./youtube";
import youtube2 from "./youtube2";
import galaryImage from "./img";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		post,
		story,
		author,
		galaryImage,
		mainImageGallery,
		category,
		verdict,
		blurb,
		hotelRating,
		foodRating,
		techRating,
		amenities,
		gallery,
		youtube,
		youtube2,
		blockContent,
		blockContentVerdict,
		comment,
	]),
});
