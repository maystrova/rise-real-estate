import Button, { BUTTON_TYPE } from 'components/button'

interface CategoryButtonProps {
    title: string
    backgroundColor: string
    fontColor: string
    onClick: () => void
}

const CategoryButton = ({
    title,
    fontColor,
    backgroundColor,
    onClick,
}: CategoryButtonProps) => {
    return (
        <Button
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            onClick={onClick}
            type={BUTTON_TYPE.CATEGORY}
        >
            <div>{title}</div>
        </Button>
    )
}

export default CategoryButton
