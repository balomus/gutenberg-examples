/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h1" value={ title } />

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			) }

			<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
			<RichText.Content
				tagName="ul"
				className="ingredients"
				value={ ingredients }
			/>

			<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>
			<div style="display: flex; justify-content: space-between;">
				<div>
					PREP TIME
					<br></br>
					15 mins
				</div>
				<div>
					COOK TIME
					<br></br>
					15 mins
				</div>
				<div>
					TOTAL TIME
					<br></br>
					30 mins
				</div>
			</div>
			<RichText.Content
				tagName="div"
				className="steps"
				value={ instructions }
			/>
		</div>
	);
};

export default Save;
