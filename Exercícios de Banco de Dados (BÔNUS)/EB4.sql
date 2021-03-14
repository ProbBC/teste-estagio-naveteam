--E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.

SELECT p.name AS projeto, GROUP_CONCAT(n.name) AS navers
FROM projects AS p
INNER JOIN projects_navers
ON projects_navers.project_id = p.id
INNER JOIN navers n
ON projects_navers.naver_id = n.id
GROUP BY p.name;
