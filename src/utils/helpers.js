export function getDateFormated(item) {
    return new Date(item).toLocaleDateString('pt-BR', {
        year: '2-digit',
        month: 'numeric', day: 'numeric',
        hour: '2-digit',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'UTC'
    });
}