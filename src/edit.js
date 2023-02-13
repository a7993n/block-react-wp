/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes: {title, content}, setAttributes}) {
	
	const blockProps = useBlockProps();
	
	/* onchangetitle */
	const onChangeTitle = (event) => {
		setAttributes({title: event.target.value});
	}

	/* onchangecontent */
	const onChangeContent = (event) => {
		setAttributes({content: event.target.value});
	}

	return (
		<div className="mission" { ...blockProps }>
			{/* Rich text h2 */}
			<RichText
				tagName='h2'
				className='mission__title'
				onChange={onChangeTitle}
				value={title}
			/>
			{/* Rich text p */}
			<RichText
				tagName='p'
				className='mission__description'
				onChange={onChangeContent}
				value={content}
			/>
		</div>

	);
}
