// TODO : formatPrice 는 기본 내보내기(default export)로,
//        formatDate 는 이름 내보내기(named export)로 내보낸다.

function formatPrice(price) {
    return `${price.toLocaleString('ko-KR')}원`;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
