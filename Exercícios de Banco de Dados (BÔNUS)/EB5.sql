--E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.

SELECT p.name AS projeto, COUNT(n.name) AS quantidade_navers
FROM projects AS p
INNER JOIN projects_navers
ON projects_navers.project_id = p.id
INNER JOIN navers n
ON projects_navers.naver_id = n.id
GROUP BY p.name;
