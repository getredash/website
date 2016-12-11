# Cohort Query Example

Cohorts are a good tool to review retention of users over a defined period of time.

To create your own cohort report, you'll need to define your cohort time frame, population and activeness of users.

Here is an example for a cohort query in PostgreSQL, step by step:

  * We used the `WITH` clause in this example - `WITH` clauses allow you to name a sub-query block, this way your query is modular (and also runs faster), it can later be referred to inside the main query instead of making a large main query with many aliases, `JOIN`s  or other complexities. You can have multiple sub-queries, just be sure to have a coma between them.

1. Select the time frame you want to investigate (usually a between a week and a month)

      ```
      with
      time_frame as (
      select current_date - 14
      ),
      ```

2. Define your population relatively to the cohort date, for each following day

      ```
      population as (
        select created_at::date as cohort_date, id as unique_id
        from users
        where created_at > (select * from time_frame)
      ),
      ```

3. Define what's an active user to you - what event interest you to examine

      ```
      activity as (
        select created_at::date as activity_date, org_id as unique_id, cohort_date
        from events
        join population on population.unique_id = org_id
        where created_at > (select * from time_frame)
      ),
      ```

4. Aggregate your population by cohort date (day 1, day 2...)

      ```
      population_agg as (
        select cohort_date, count(distinct unique_id) as total
        from population
        group by 1
      )
      ```

5. Write your query to show your population % by cohort dates

      ```
      select activity.cohort_date as date,
          date_part('day',age(activity_date, activity.cohort_date)) as day,
          count(distinct unique_id) as value,
          total
      from activity
      join population_agg on activity.cohort_date = population_agg.cohort_date
      group by 1 , 2, 4
      ```

6. Add a cohort visualization to your query and you're done!

![](../assets/visualization_examples/cohort.png)
