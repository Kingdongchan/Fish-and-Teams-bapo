function randomArrangeAndShare(teamCount) {
    // --- [STEP 1: 팀 배정 로직 실행] ---
    const resultTeams = executeSnakeDraft(teamCount); 

    // --- [STEP 2: 카톡에 보낼 텍스트 만들기] ---
    let resultText = "조 편성 결과입니다:\n";
    resultTeams.forEach(team => {
        const names = team.members.map(m => m.name).join(', ');
        resultText += `\n[${team.teamName}팀]: ${names}`;
    });

    // --- [STEP 3: 카카오톡 공유 실행] ---
    if (Kakao.isInitialized()) {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '🎉 팀 배치 완료!',
                description: resultText,
                imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/05/24/group-2935521_1280.png',
                link: {
                    // 여기를 등록하신 도메인으로 정확히 바꿔줍니다.
                    mobileWebUrl: 'https://949e5b88.fish-and-teams-bls.pages.dev',
                    webUrl: 'https://949e5b88.fish-and-teams-bls.pages.dev',
                },
            },
            buttons: [
                {
                    title: '나도 확인하기',
                    link: {
                        mobileWebUrl: 'https://949e5b88.fish-and-teams-bls.pages.dev',
                        webUrl: 'https://949e5b88.fish-and-teams-bls.pages.dev',
                    },
                    link: {
                        mobileWebUrl: 'https://fish-and-teams-bls.pages.dev',
                        webUrl: 'https://fish-and-teams-bls.pages.dev'
                    }                   
                },
            ],
        });
    } else {
        alert('카카오 SDK가 초기화되지 않았습니다.');
    }
}2