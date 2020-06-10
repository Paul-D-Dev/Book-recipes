const formatLabel = (label: string): string => {
    let color : string;
    switch (label) {
        case 'Fat':
            color = 'creamy-peach';
            break;
        case 'Carbs':
            color = 'rosy-highlight';
            break;
        case 'Protein': 
            color = 'soft-blue';
            break;
        default:
            color = 'clouds';
            break;
    }
    return `bg-${color}`;
}

export default formatLabel;