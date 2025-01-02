fetchProjects: async() => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    set({projects: data.data})
}

fetchAnirudh: async() => {
    const res = await fetch("/api/anirudh");
    const data = await res.json();

}